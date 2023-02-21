<template>
  <div class="bpmnPage">
    <NavMenu :data="navmenu"></NavMenu>
    <div class="containers">
      <div ref="canvas" class="canvas"></div>
      <div id="js-properties-panel" class="properties-panel-parent"></div>
    </div>
  </div>
</template>
<script setup>
import NavMenu from '../../components/NavMenu.vue';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css'; // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css';
import CamundaBpmnModdle from 'camunda-bpmn-moddle/resources/camunda.json';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
} from 'bpmn-js-properties-panel';

const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
<process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始">
    <outgoing>SequenceFlow_0h21x7r</outgoing>
    </startEvent>
    <task id="Task_1hcentk">
    <incoming>SequenceFlow_0h21x7r</incoming>
    </task>
    <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
</process>
<bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
    <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
        <omgdc:Bounds x="160" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
    </bpmndi:BPMNShape>
    <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
        <omgdc:Bounds x="240" y="80" width="100" height="80" />
    </bpmndi:BPMNShape>
    <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="240" y="120" />
    </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`;
import { ref, onMounted } from 'vue';
let bpmnModeler = ref(null);
let container = ref(null);
let canvas = ref(null);

import { useRouter } from 'vue-router';
const router = useRouter();
const navmenu = [
  {
    type: 'button',
    text: '返回编辑器',
    handler: () => router.push('/'),
  },
  {
    type: 'button',
    text: '输出xml',
    handler: () => {
      bpmnModeler.value.saveXML().then((res) => {
        console.log(res.xml);
      });
    },
  },
];

import customTranslate from './customTranslate';
var customTranslateModule = {
  translate: ['value', customTranslate],
};

onMounted(() => {
  bpmnModeler = new BpmnModeler({
    container: canvas.value,
    propertiesPanel: {
      parent: '#js-properties-panel',
    },
    additionalModules: [
      // 右边的属性栏
      BpmnPropertiesPanelModule,
      BpmnPropertiesProviderModule,
      CamundaPlatformPropertiesProviderModule,
      customTranslateModule,
    ],
    moddleExtensions: {
      camunda: CamundaBpmnModdle,
    },
  });
  let result = bpmnModeler.value.importXML(xmlStr);
});
</script>
<style scoped lang="scss">
.bpmnPage {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: auto 1fr;
}

.containers {
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 300px;

  .canvas {
    width: 100%;
    height: 100%;
  }

  .properties-panel-parent {
    width: 300px;
    border-left: 1px solid #ccc;
    overflow: auto;
    z-index: 1000;
  }
}
</style>
