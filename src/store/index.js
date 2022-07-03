import TemplateStore from './TemplateStore';
import AgendaStore from './AgendaStore';

import { createStore } from "vuex";

export default createStore({
  modules: {
    TemplateStore,
    AgendaStore,
  }
})