import Vue, { VueConstructor } from 'vue';
import { ExtendedVue } from 'vue/types/vue';
import { VuetablePagination } from './vuetable.pagination';

export interface VuetablePaginationInfoMixinProps {
  /**
   * The `css` property holds most of the CSS classes that VuetablePaginationInfo uses in its template.
   * @see https://www.vuetable.com/api/pagination-info/mixin.html#css
   */
  css: {
    infoClass: string;
  };

  /**
   * The template string to be used to display the pagination information.
   *
   * Available placeholders
   * - {from} the starting record number displayed
   * - {to} the ending record number displayed
   * - {total} the total number of records available
   * @see https://www.vuetable.com/api/pagination-info/mixin.html#info-template
   * @default "Displaying {from} to {to} of {total} items"
   */
  infoTemplate: string;

  /**
   * The template string to be showned when there is no data to display.
   * @see https://www.vuetable.com/api/pagination-info/mixin.html#no-data-template
   * @default "No relevant data"
   */
  noDataTemplate: string;
}

export interface VuetablePaginationInfoMixinData {
  /**
   * The pagination information received from Vuetable.
   * @see https://www.vuetable.com/api/pagination-info/mixin.html#tablepagination
   */
  tablePagination: VuetablePagination;
}

export interface VuetablePaginationInfoMixinComputed {
  /**
   * The actual pagination information to be displayed after replacing all the placeholders with corresponding values.
   * @see https://www.vuetable.com/api/pagination-info/mixin.html#paginationinfo
   */
  paginationInfo: string;
}

export interface VuetablePaginationInfoMixinMethods {
  /**
   * Setting the `tablePagination` data to be used when rendering pagination component.
   * @see https://www.vuetable.com/api/pagination-info/mixin.html#setpaginationdata
   */
  setPaginationData: (tablePagination: VuetablePagination) => void;

  /**
   * This method will set `tablePagination` to null.
   * @see https://www.vuetable.com/api/pagination-info/mixin.html#resetdata
   */
  resetData: () => void;
}

export interface VuetablePaginationInfoMixinConstructor extends VueConstructor {
  props: VuetablePaginationInfoMixinProps;
  data: () => VuetablePaginationInfoMixinData;
  computed: VuetablePaginationInfoMixinComputed;
  methods: VuetablePaginationInfoMixinMethods;
}

export type VuetablePaginationInfoMixinInstance = InstanceType<ExtendedVue<Vue, VuetablePaginationInfoMixinData, VuetablePaginationInfoMixinMethods, VuetablePaginationInfoMixinComputed, VuetablePaginationInfoMixinProps>>;

export const VuetablePaginationInfoMixin: VuetablePaginationInfoMixinConstructor;
