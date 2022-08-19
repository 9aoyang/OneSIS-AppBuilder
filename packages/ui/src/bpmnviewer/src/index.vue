<template>
  <div ref="container" class="vue-bpmn-diagram-container"></div>
</template>
<script>
import { defineComponent, onMounted, ref, watch } from 'vue';
import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.development.js';
import useApp from '../../useApp';

export default defineComponent({
  name: 'magic-ui-bpmnviewer',
  emits: ['error', 'shown', 'loading'],
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, ctx) {
    useApp(props);
    const container = ref(null);
    let diagramXML = ref(null);
    let bpmnViewer = null

    onMounted(() => {
      bpmnViewer = new BpmnJS({container:container.value});

      bpmnViewer.on('import.done', function (event) {

        var error = event.error;
        var warnings = event.warnings;

        if (error) {
          ctx.emit('error', error);
        } else {
          ctx.emit('shown', warnings);
        }

        bpmnViewer.get('canvas').zoom('fit-viewport');
      });

      let fetchDiagram = src => {
        fetch(src)
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            diagramXML.value = text;
          })
          .catch(function (err) {
            ctx.emit('error', err);
          });
      }

      watch(diagramXML, async (xml) => {
        await bpmnViewer.importXML(xml);
        bpmnViewer.get('canvas').zoom('fit-viewport');
        
      });
      watch(()=>props.config.xml,(val)=>{
        diagramXML.value = val;
      });
      watch(() => props.config.src, (val) => {
        ctx.emit('loading');
        fetchDiagram(val);
      });
      watch(()=>props.config.done,val=>{
        val.trim().split(/\n/).forEach(id=>{
          if(id.length){
            bpmnViewer.get('canvas').addMarker(id, 'bpmn-highlight');
          }
        });
      });

      if (props.config.src) {
        fetchDiagram(props.config.src);
      }
    });

    return {
      container
    };
  },
});
</script>
<style>
.bjs-powered-by{
  display: none !important;
}
.bpmn-highlight:not(.djs-connection) .djs-visual > :nth-child(1) {
  fill: green !important;
}
</style>