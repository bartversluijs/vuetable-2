import Vue, { VueConstructor } from 'vue';
import { ExtendedVue } from 'vue/types/vue';

export type VuetablePagination = Object;

export interface VuetablePaginationMixinProps {
  /**
   * The css property holds most of the CSS classes that VuetablePagination uses in its template.
   * @see https://www.vuetable.com/api/pagination/mixin.html#css
   */
  css: {
    wrapperClass: string;
    activeClass: string;
    disabledClass: string;
    pageClass: string;
    linkClass: string;
    paginationClass: string;
    paginationInfoClass: string;
    dropdownClass: string;
    icons: {
      first: string;
      prev: string;
      next: string;
      last: string;
    }
  };

  /**
   * The value of this property specifies the slide size on each side of the center.
   * @see https://www.vuetable.com/api/pagination/mixin.html#on-each-side
   * @default 2
   */
  onEachSide: number;

  /**
   * First page number. Set this prop to 0 for zero based pagination.
   * @see https://www.vuetable.com/api/pagination/mixin.html#first-page
   * @default 1
   */
  firstPage: number;
}

export interface VuetablePaginationMixinComputed {
  /**
   * The total number of available pages. This value is taken from the `last_page` field of pagination information.
   * @see https://www.vuetable.com/api/pagination/mixin.html#totalpage
   */
  totalPage: number;

  /**
   * The last page number.
   * @see https://www.vuetable.com/api/pagination/mixin.html#lastpage
   */
  lastPage: number;

  /**
   * Returns `true` if the current page number is the first page; otherwise, returns `false`.
   * @see https://www.vuetable.com/api/pagination/mixin.html#isonfirstpage
   */
  isOnFirstPage: boolean;

  /**
   * Returns `true` if the current page number is the last page; otherwise, returns `false`.
   * @see https://www.vuetable.com/api/pagination/mixin.html#isonlastpage
   */
  isOnLastPage: boolean;

  /**
   * Determine if the total number of pages is enough to be displayed without sliding.
   * @see https://www.vuetable.com/api/pagination/mixin.html#notenoughpages
   */
  notEnoughPages: boolean;

  /**
   * The size of the sliding window calculating from `on-each-side` * 2 + 1.
   * @see https://www.vuetable.com/api/pagination/mixin.html#windowsize
   */
  windowSize: number;

  /**
   * Return the first page number to be shown on the leftmost.
   * @see https://www.vuetable.com/api/pagination/mixin.html#windowstart
   */
  windowStart: number;
}

export interface VuetablePaginationMixinData {
  /**
   * The pagination information received from Vuetable.
   * @see https://www.vuetable.com/api/pagination/mixin.html#tablepagination
   */
  tablePagination: VuetablePagination;
}

export interface VuetablePaginationMixinMethods {
  /**
   * Determine if the given page number is the current page.
   * @see https://www.vuetable.com/api/pagination/mixin.html#iscurrentpage
   */
  isCurrentPage: (page: number) => void;

  /**
   * Setting the `tablePagination` data to be used when rendering pagination component.
   * @see https://www.vuetable.com/api/pagination/mixin.html#setpaginationdata
   */
  setPaginationData: (tablePagination: VuetablePagination) => void;

  /**
   * This method will set tablePagination to null.
   * @see https://www.vuetable.com/api/pagination/mixin.html#resetdata
   */
  resetData: () => void;
}

export interface VuetablePaginationMixinConstructor extends VueConstructor {
  props: VuetablePaginationMixinProps;
  data: () => VuetablePaginationMixinData;
  computed: VuetablePaginationMixinComputed;
  methods: VuetablePaginationMixinMethods;
}

export type VuetablePaginationMixinInstance = InstanceType<ExtendedVue<Vue, VuetablePaginationMixinData, VuetablePaginationMixinMethods, VuetablePaginationMixinComputed, VuetablePaginationMixinProps>>;

export const VuetablePaginationMixin: VuetablePaginationMixinConstructor;
