import { PropType } from 'vue';
import type { FormConfig } from '@tmagic/form';
import type { MApp, MNode } from '@tmagic/schema';
import type StageCore from '@tmagic/stage';
import { ContainerHighlightType, MoveableOptions } from '@tmagic/stage';
import type {
  ComponentGroup,
  MenuBarData,
  MenuItem,
  Services,
  SideBarData,
  StageRect,
} from './type';
declare const _default: import('vue').DefineComponent<
  {
    /** 页面初始值 */
    modelValue: {
      type: PropType<MApp>;
      default: () => {};
      require: boolean;
    };
    /** 左侧面板中的组件列表 */
    componentGroupList: {
      type: PropType<ComponentGroup[]>;
      default: () => never[];
    };
    /** 左侧面板配置 */
    sidebar: {
      type: PropType<SideBarData>;
    };
    layerContentMenu: {
      type: PropType<MenuItem[]>;
      default: () => never[];
    };
    stageContentMenu: {
      type: PropType<MenuItem[]>;
      default: () => never[];
    };
    /** 顶部工具栏配置 */
    menu: {
      type: PropType<MenuBarData>;
      default: () => {
        left: never[];
        right: never[];
      };
    };
    /** 中间工作区域中画布渲染的内容 */
    render: {
      type: PropType<() => HTMLDivElement>;
    };
    /** 中间工作区域中画布通过iframe渲染时的页面url */
    runtimeUrl: StringConstructor;
    /** 选中时是否自动滚动到可视区域 */
    autoScrollIntoView: BooleanConstructor;
    /** 组件的属性配置表单的dsl */
    propsConfigs: {
      type: PropType<Record<string, FormConfig>>;
      default: () => {};
    };
    /** 添加组件时的默认值 */
    propsValues: {
      type: PropType<Record<string, MNode>>;
      default: () => {};
    };
    /** 组件联动事件选项列表 */
    eventMethodList: {
      type: ObjectConstructor;
      default: () => {};
    };
    /** 画布中组件选中框的移动范围 */
    moveableOptions: {
      type: PropType<MoveableOptions | ((core?: StageCore) => MoveableOptions)>;
    };
    /** 编辑器初始化时默认选中的组件ID */
    defaultSelected: {
      type: (NumberConstructor | StringConstructor)[];
    };
    canSelect: {
      type: PropType<(el: HTMLElement) => boolean | Promise<boolean>>;
      default: (el: HTMLElement) => boolean;
    };
    isContainer: {
      type: PropType<(el: HTMLElement) => boolean | Promise<boolean>>;
      default: (el: HTMLElement) => boolean;
    };
    containerHighlightClassName: {
      type: StringConstructor;
      default: string;
    };
    containerHighlightDuration: {
      type: NumberConstructor;
      default: number;
    };
    containerHighlightType: {
      type: PropType<ContainerHighlightType>;
      default: ContainerHighlightType;
    };
    stageRect: {
      type: PropType<StageRect>;
    };
    codeOptions: {
      type: ObjectConstructor;
      default: () => {};
    };
    updateDragEl: {
      type: PropType<(el: HTMLDivElement, target: HTMLElement) => void>;
    };
  },
  Services,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  ('props-panel-mounted' | 'update:modelValue')[],
  'props-panel-mounted' | 'update:modelValue',
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      /** 页面初始值 */
      modelValue: {
        type: PropType<MApp>;
        default: () => {};
        require: boolean;
      };
      /** 左侧面板中的组件列表 */
      componentGroupList: {
        type: PropType<ComponentGroup[]>;
        default: () => never[];
      };
      /** 左侧面板配置 */
      sidebar: {
        type: PropType<SideBarData>;
      };
      layerContentMenu: {
        type: PropType<MenuItem[]>;
        default: () => never[];
      };
      stageContentMenu: {
        type: PropType<MenuItem[]>;
        default: () => never[];
      };
      /** 顶部工具栏配置 */
      menu: {
        type: PropType<MenuBarData>;
        default: () => {
          left: never[];
          right: never[];
        };
      };
      /** 中间工作区域中画布渲染的内容 */
      render: {
        type: PropType<() => HTMLDivElement>;
      };
      /** 中间工作区域中画布通过iframe渲染时的页面url */
      runtimeUrl: StringConstructor;
      /** 选中时是否自动滚动到可视区域 */
      autoScrollIntoView: BooleanConstructor;
      /** 组件的属性配置表单的dsl */
      propsConfigs: {
        type: PropType<Record<string, FormConfig>>;
        default: () => {};
      };
      /** 添加组件时的默认值 */
      propsValues: {
        type: PropType<Record<string, MNode>>;
        default: () => {};
      };
      /** 组件联动事件选项列表 */
      eventMethodList: {
        type: ObjectConstructor;
        default: () => {};
      };
      /** 画布中组件选中框的移动范围 */
      moveableOptions: {
        type: PropType<MoveableOptions | ((core?: StageCore) => MoveableOptions)>;
      };
      /** 编辑器初始化时默认选中的组件ID */
      defaultSelected: {
        type: (NumberConstructor | StringConstructor)[];
      };
      canSelect: {
        type: PropType<(el: HTMLElement) => boolean | Promise<boolean>>;
        default: (el: HTMLElement) => boolean;
      };
      isContainer: {
        type: PropType<(el: HTMLElement) => boolean | Promise<boolean>>;
        default: (el: HTMLElement) => boolean;
      };
      containerHighlightClassName: {
        type: StringConstructor;
        default: string;
      };
      containerHighlightDuration: {
        type: NumberConstructor;
        default: number;
      };
      containerHighlightType: {
        type: PropType<ContainerHighlightType>;
        default: ContainerHighlightType;
      };
      stageRect: {
        type: PropType<StageRect>;
      };
      codeOptions: {
        type: ObjectConstructor;
        default: () => {};
      };
      updateDragEl: {
        type: PropType<(el: HTMLDivElement, target: HTMLElement) => void>;
      };
    }>
  > & {
    'onProps-panel-mounted'?: ((...args: any[]) => any) | undefined;
    'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined;
  },
  {
    menu: MenuBarData;
    codeOptions: Record<string, any>;
    layerContentMenu: MenuItem[];
    stageContentMenu: MenuItem[];
    modelValue: MApp;
    componentGroupList: ComponentGroup[];
    autoScrollIntoView: boolean;
    propsConfigs: Record<string, FormConfig>;
    propsValues: Record<string, MNode>;
    eventMethodList: Record<string, any>;
    canSelect: (el: HTMLElement) => boolean | Promise<boolean>;
    isContainer: (el: HTMLElement) => boolean | Promise<boolean>;
    containerHighlightClassName: string;
    containerHighlightDuration: number;
    containerHighlightType: ContainerHighlightType;
  }
>;
export default _default;
