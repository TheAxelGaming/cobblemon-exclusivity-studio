// ==========================================
// EventManager.js - Lógica de Eventos Especiales
// ==========================================

class EventManager {
  constructor() {
    this.events = [];
    this.loadFromData();
  }

  loadFromData() {
    const saved = localStorage.getItem('bp_events');
    if (saved) {
      try {
        this.events = JSON.parse(saved);
      } catch (e) {
        console.error("Error loading events", e);
        this.events = [];
      }
    }
  }

  save() {
    localStorage.setItem('bp_events', JSON.stringify(this.events));
  }

  addEvent() {
    const id = 'event_' + Date.now();
    const newEvent = {
        id: id,
        points: 1000,
        duration: '7d',
        material: 'COBBLEMON_MASTER_BALL',
        description: 'Nuevo Evento'
    };
    this.events.push(newEvent);
    this.save();
    return newEvent;
  }

  deleteEvent(id) {
    this.events = this.events.filter(e => e.id !== id);
    this.save();
  }

  updateEvent(id, data) {
    const e = this.events.find(ev => ev.id === id);
    if (e) {
        Object.assign(e, data);
        this.save();
    }
  }

  generateYaml() {
    const yamlObj = {};
    this.events.forEach(e => {
        yamlObj[e.id] = {
            'event-id': e.id,
            'points': e.points,
            'cooldown': e.duration,
            'material': e.material
        };
    });
    return jsyaml.dump(yamlObj);
  }

  getTotalEventPoints() {
    return this.events.reduce((sum, e) => sum + (parseInt(e.points) || 0), 0);
  }
}
