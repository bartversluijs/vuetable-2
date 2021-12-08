import Vue, { VueConstructor } from 'vue';
import { ExtendedVue } from 'vue/types/vue';
import { VuetableDataRow, VuetableInstance } from './vuetable';

export interface VuetableFieldMixinData<T = VuetableDataRow> {}

export interface VuetableFieldMixinMethods<T = VuetableDataRow> {}

export interface VuetableFieldMixinComputed<T = VuetableDataRow> {}

export interface VuetableFieldMixinProps<T = VuetableDataRow> {
  rowData: T;
  rowIndex: number;
  rowField: Object;
  isHeader: boolean;
  title: string;
  vuetable: VuetableInstance;
}

export interface VuetableFieldMixinConstructor<T = VuetableDataRow> extends VueConstructor {
  props: VuetableFieldMixinProps<T>;
  data: () => VuetableFieldMixinData<T>;
  computed: VuetableFieldMixinComputed<T>;
  methods: VuetableFieldMixinMethods<T>;
}

export type VuetableFieldMixinInstance<T = VuetableDataRow> = InstanceType<ExtendedVue<Vue, VuetableFieldMixinData<T>, VuetableFieldMixinMethods<T>, VuetableFieldMixinComputed<T>, VuetableFieldMixinProps<T>>>;

export const VuetableFieldMixin: VuetableFieldMixinConstructor;
