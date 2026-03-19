/**
 * ProgressManager.js
 * Lógica para calcular la distribución de XP en las misiones
 */

class ProgressManager {
  constructor() {
    this.totalXpNeeded = 42500; // XP total para nivel 100
  }

  /**
   * Calcula los puntos necesarios por misión
   * @param {number} durationWeeks - Duración total en semanas
   * @param {number} dailyCount - Cantidad de misiones diarias activas (ej. 3)
   * @param {number} weeklyCount - Cantidad de misiones semanales activas (ej. 8)
   * @param {number} dailyRatio - Porcentaje de XP que viene de diarias (0.0 a 1.0)
   * @param {number} eventPoints - Puntos totales provenientes de eventos
   */
  calculate(durationWeeks, dailyCount, weeklyCount, dailyRatio = 0.6, eventPoints = 0) {
    if (durationWeeks <= 0) return null;

    // Los puntos de eventos reducen directamente el objetivo total
    const remainingXpNeeded = Math.max(0, this.totalXpNeeded - eventPoints);
    const weeklyXpTarget = remainingXpNeeded / durationWeeks;
    
    // XP que debe venir de las diarias CADA SEMANA
    const totalDailyXpPerWeek = weeklyXpTarget * dailyRatio;
    // XP que debe venir de las semanales CADA SEMANA
    const totalWeeklyXpPerWeek = weeklyXpTarget * (1 - dailyRatio);

    // Una misión diaria se completa 7 veces a la semana
    const dailyPoints = Math.round(totalDailyXpPerWeek / (dailyCount * 7));
    const weeklyPoints = Math.round(totalWeeklyXpPerWeek / weeklyCount);

    // Validaciones y Alertas
    const alerts = [];
    
    // Alerta de "Pase demasiado fácil"
    const reductionPercent = (eventPoints / this.totalXpNeeded) * 100;
    if (reductionPercent >= 20) {
        alerts.push({
            type: 'danger',
            message: `⚠️ El pase se completará un ${Math.round(reductionPercent)}% más rápido de lo previsto debido a los eventos activos.`
        });
    }

    if (dailyPoints > 500) {
      alerts.push({
        type: 'warning',
        message: `⚠️ Puntos por diaria altos (${dailyPoints}). Considera añadir más misiones diarias o aumentar la duración.`
      });
    }

    if (dailyPoints < 50 && durationWeeks > 0 && remainingXpNeeded > 0) {
       alerts.push({
        type: 'info',
        message: `ℹ️ El pase es muy largo para tan poca XP. Las misiones darán muy pocos puntos (${dailyPoints}).`
      });
    }

    return {
      totalXpNeeded: this.totalXpNeeded,
      remainingXpNeeded,
      weeklyXpTarget: Math.round(weeklyXpTarget),
      dailyPoints,
      weeklyPoints,
      reductionPercent,
      alerts
    };
  }

  /**
   * Estima si es posible completar el pase
   */
  checkFeasibility(durationWeeks, dailyCount, weeklyCount) {
    if (dailyCount === 0 && weeklyCount === 0) {
      return {
        possible: false,
        message: "❌ Imposible completar sin misiones activas."
      };
    }
    return { possible: true };
  }
}

// Exportar para uso global
window.ProgressManager = ProgressManager;
