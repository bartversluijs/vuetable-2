import { AxiosResponse } from 'axios';
import Vue, { VueConstructor } from 'vue';
import { ExtendedVue } from 'vue/types/vue';

export type VuetableDataRow = any;

export type RowIdentifier = any;

export interface VuetableField<T = VuetableDataRow> {
  name: string | Vue;
  sortField?: string;
  title?: string | (() => string),
  titleClass?: string;
  dataClass?: string;
  formatter?: (value: T) => string;
  visible?: boolean;
  width?: string;
  $_index: number;
}

export interface VuetableProps<T = VuetableData> {
  /**
   * API mode.
   * @see https://www.vuetable.com/api/vuetable/properties.html#api-mode
   * @default true
   */
  apiMode: boolean;

  /**
   * The URL of the api endpoint that Vuetable will interact with.
   * If the API supports sorting, filtering, pagination of the data, Vuetable can automatically append appropriate information to the server via query string.
   * @see https://www.vuetable.com/api/vuetable/properties.html#api-url
   */
  apiUrl?: string;

  /**
   * Additional parameters that Vuetable should append to the query string when requesting data from the server.
   * @see https://www.vuetable.com/api/vuetable/properties.html#append-params
   * @default {}
   */
  appendParams: Object;

  /**
   * This is where you should override the CSS classes that Vuetable uses to render HTML table that should help you style the table to your needs.
   * @see https://www.vuetable.com/api/vuetable/properties.html#append-params
   * @default {}
   */
  css: Object;

  /**
   * The data that Vuetable will be used to render the table when `api-mode` is set to `false`
   * @see https://www.vuetable.com/api/vuetable/properties.html#data
   */
  data?: Array<T> | T;

  /**
   * Only used in data mode.
   * @see https://www.vuetable.com/guide/api-vs-data-mode.html#data-mode
   */
  // TODO: Add sort order & pagination
  dataManager?: () => Array<T> | T;

  /**
   * The path inside the data structure that contains actual the data.
   * @see https://www.vuetable.com/api/vuetable/properties.html#data-path
   * @default data
   */
  dataPath?: string;

  /**
   * A component name to be used as the content of detail row to be displayed underneath the current row.
   * @see https://www.vuetable.com/api/vuetable/properties.html#detail-row-component
   */
  detailRowComponent?: string;

  /**
   * The CSS class to apply to detail row during transition.
   * @see https://www.vuetable.com/api/vuetable/properties.html#detail-row-transition
   */
  detailRowTransition?: string;

  /**
   * The CSS class to apply to the detail row.
   * @see https://www.vuetable.com/api/vuetable/properties.html#detail-row-class
   */
  detailRowClass?: string;

  /**
   * Object to be passed to the detail row component as `options` prop.
   * @see https://www.vuetable.com/api/vuetable/properties.html#detail-row-options
   * @default {}
   */
  detailRowOptions?: Object;

  /**
   * Prefix before each event.
   * @default vuetable
   */
  eventPrefix: string;

  /**
   * Vuetable fields.
   * @see https://www.vuetable.com/api/vuetable/properties.html#fields
   * @required
   */
  fields: Array<string | VuetableField>;

  /**
   * Default component name prefix of the Feild component used in Vuetable.
   * The `__` characters in field name of field definition serve as a shorthand for Field component to be used for the given column.
   * The shorthand will be replaced with the given prefix during initialization of Vuetable.
   * @see https://www.vuetable.com/api/vuetable/properties.html#field-prefix
   * @default vuetable-field-
   */
  fieldPrefix: string;

  /**
   * First page number. Set this prop to 0 for zero based pagination.
   * If the first page of your API endpoint is 0, you can use this prop to set it.
   * @see https://www.vuetable.com/api/vuetable/properties.html#first-page
   * @default 1
   */
  firstPage: number;

  /**
   * Array of row header components to be rendered as table header.
   * @see https://www.vuetable.com/api/vuetable/properties.html#header-rows
   * @default ['VuetableRowHeader']
   */
  headerRows: Array<string>;

  /**
   * Allow specifying external HTTP request function to fetch the data via AJAX.
   * @see https://www.vuetable.com/api/vuetable/properties.html#http-fetch
   * @default axios
   */
  httpFetch?: (apiUrl: string, httpOptions: Object) => {
    data: AxiosResponse['data'];
  };

  /**
   * Only support `get` or `post` method. Please note that it must be the lowercase string.
   * @see https://www.vuetable.com/api/vuetable/properties.html#http-method
   * @default get
   */
  httpMethod: 'get' | 'post';

  /**
   * Allow passing additional options to the server during AJAX call. Internally, Vuetable uses `axios` to handle AJAX request.
   * @see https://www.vuetable.com/api/vuetable/properties.html#http-options
   * @default {}
   */
  httpOptions: Object;

  /**
   * The initial page number of data to be requested the first time Vuetable is loaded.
   * @see https://www.vuetable.com/api/vuetable/properties.html#initial-page
   * @default 1
   */
  initialPage: number;

  /**
   * Whether Vuetable should immediately load the data from the server after finish initialization.
   * @default true
   */
  loadOnStart: boolean;

  /**
   * The minimum number of rows that should be displayed when rendering the table.
   * If the number of row available is less than the number specified in min-rows prop, Vuetable will render empty table rows to satisfy that minimum rows.
   * @see https://www.vuetable.com/api/vuetable/properties.html#initial-page
   * @default 0
   */
  minRows: number;

  /**
   * Enable multiple sort columns interaction.
   * When this is enabled, user can press a modifier key (specified in multi-sort-key prop) to do subsequent sorting of the sort result.
   * @see https://www.vuetable.com/api/vuetable/properties.html#multi-sort
   * @default false
   */
  multiSort: boolean;

  /**
   * The key to trigger column adding/subtracting when multi-sort is enabled.
   * @see https://www.vuetable.com/api/vuetable/properties.html#multi-sort-key
   * @default alt
   */
  multiSortKey: 'alt' | 'ctrl' | 'shift' | 'meta';

  /**
   * The number of data to be requested per page.
   * @see https://www.vuetable.com/api/vuetable/properties.html#per-page
   * @default 10
   */
  perPage: number;

  /**
   * The text to be used as keys in query string that will be sent to the server. If your API endpoint uses different keys, you can specified them via this prop.
   * @default {
   *   sort: 'sort',
   *   page: 'page',
   *   perPage: 'per_page'
   * }
   */
  queryParams: Object | ((sortOrder: Array<string>, currentPage: number, perPage: number) => Object);

  /**
   * This tells Vuetable whether it should watch for the change in `api-url` prop and refresh the data automatically.
   * @see https://www.vuetable.com/api/vuetable/properties.html#reactive-api-url
   * @default true
   */
  reactiveApiUrl: boolean;

  /**
   * The CSS class name that will be applied to each table row.
   * If row-class prop is a _Function`, Vuetable will automatically call the given function on each row, passing the row data and row index to it.
   * Vuetable will then use the returned string from the given method as CSS class for that row.
   * @see https://www.vuetable.com/api/vuetable/properties.html#row-class
   */
  rowClass?: string | ((dataItem: T, index: number) => string);

  /**
   * This tells Vuetable whether or not icons should be added to `th` elements whenever a given column is sortable.
   * @see https://www.vuetable.com/api/vuetable/properties.html#show-sort-icons
   * @default true
   */
  showSortIcons: boolean;

  /**
   * The default sort order that Vuetable should use when requesting the data from server.
   * @see https://www.vuetable.com/api/vuetable/properties.html#sort-order
   * @default []
   */
  sortOrder: Array<string>;

  /**
   * If assigned, this function will be called by Vuetable passing the current sort orders array as a parameter.
   * You can use it to override how the sort parameters are constructed as part of the query string that will be sent to the API endpoint.
   * The function must return a string to be included in the query string of API request
   * @see https://www.vuetable.com/api/vuetable/properties.html#sort-params
   */
  sortParams?: (sortOrder: Array<string>) => string;

  /**
   * Text to be displayed when there are no records in the table. It also support HTML.
   * The text will be inserted into a `td` which is spaned the whole row.
   * @see https://www.vuetable.com/api/vuetable/properties.html#no-data-template
   */
  noDataTemplate?: string;

  /**
   * The pagination path inside the data structure that contains the pagination information.
   * If the your data from the server does not have pagination metadata, you should set the prop to empty string, e.g. pagination-path="", to suppress warning from Vuetable.
   * @see https://www.vuetable.com/api/vuetable/properties.html#pagination-path
   * @default links.pagination
   */
  paginationPath: string;

  /**
   * Fix the height of table body.
   * When set, the height of the body of Vuetable will be set at the given value and vertical scrollbar will appear automatically when the content of table body is longer than the given value.
   * The value can be any unit valid in HTML.
   * @see https://www.vuetable.com/api/vuetable/properties.html#table-height
   */
  tableHeight?: string;

  /**
   * The key that uses to unqiuely identified each row in the data array to help track the state of detail row and checkbox features of Vuetable. This is necessary for the detail row and checkbox features to function correctly.
   *
   * For detail row, whenever the user clicks to expand the detail row, Vuetable will insert the id of that row into its internal array (visibleDetailRows). And when that detail row is hidden, the id of that detail row is removed from the array.
   *
   * For checkbox, when the user selects (checked) a row, Vuetable will insert the id of the row into its internal array (selectedTo). And when that row is unselected (unchecked), the id of that row is removed from the array.
   * @see https://www.vuetable.com/api/vuetable/properties.html#track-by
   * @default id
   */
  trackBy: string | ((item: T) => string);

  /**
   * A function that allows the user to programmatically transform the receiving data into the one can Vuetable can works with.
   *
   * When defined, the given function will be called whenever Vuetable recieves the requested data from the server, before the data are displayed. This provides a hook to manipulate the data that developer might have control over its format, transforming the data into the format that Vuetable can be used.
   *
   * The function will receive the raw data returned from the server as its parameter. It must returns the already transformed data; otherwise, the table might appear as empty.
   * @see https://www.vuetable.com/api/vuetable/properties.html#transform
   */
  transform: (data: T) => T;
}

export interface VuetableData<T = VuetableDataRow> {
  /**
   * The normalized version of fields definition. This is done during the `created` hook.
   * @see https://www.vuetable.com/api/vuetable/data.html#tablefields
   * @default []
   */
  tableFields: VuetableProps['fields'];

  /**
   * In `api-mode`, this stores the data that returned from the server after the sucessful AJAX request. Otherwise, it stores the data assigned to via `data` prop or `setData` method. Vuetable always use `tableData` for table rendering.
   * @see https://www.vuetable.com/api/vuetable/data.html#tabledata
   */
  tableData: Array<T>;

  /**
   * If the data returned from the server contains pagination information specified in the `pagination-path`, this is where it gets stored.
   * @see https://www.vuetable.com/api/vuetable/data.html#tablepagination
   */
  tablePagination: Object;

  /**
   * Vuetable use this to keep track of the current page being diplayed.
   * @see https://www.vuetable.com/api/vuetable/data.html#currentpage
   */
  currentPage: number;

  /**
   * When `__checkbox` field option is used and the user selected/unselected any checkbox, its row indentifier is either stored in or remove from here.
   * The row identifier can be specified using `track-by` option.
   * @see https://www.vuetable.com/api/vuetable/data.html#selectedto
   */
  selectedTo: Array<any>;

  /**
   * This stores the row identifier of any row where its detail row is visible.
   * @see https://www.vuetable.com/api/vuetable/data.html#visibledetailrows
   */
  visibleDetailRows: Array<any>;
}

export interface VuetableComputed<T = VuetableDataRow> {
  /**
   * Return the number of rows for the current data or zero (0) if the `tableData` is `null`.
   * @see https://www.vuetable.com/api/vuetable/computed.html#counttabledata
   */
  countTableData: number;

  /**
   * Return the number of visible fields in the table by checking the field's visible option.
   * @see https://www.vuetable.com/api/vuetable/computed.html#countvisiblefields
   */
  countVisibleFields: number;

  /**
   * Determine if Vuetable should display empty data row message.
   * @see https://www.vuetable.com/api/vuetable/computed.html#displayemptydatarow
   */
  displayEmptyDataRow: boolean;

  /**
   * Determine if the number of data rows available is less than the number specified in `min-rows` prop.
   * @see https://www.vuetable.com/api/vuetable/computed.html#lessthanminrows
   */
  lessThanMinRows: boolean;

  /**
   * Return the number of blank rows that Vuetable needs to render.
   * If the number of row data is greater than or equal to `min-rows`, it returns 0.
   * @see https://www.vuetable.com/api/vuetable/computed.html#blankrows
   */
  blankRows: number;

  /**
   * Determine if detail row should be rendered by inspecting the availability of the data and various properties.
   * @see https://www.vuetable.com/api/vuetable/computed.html#usedetailrow
   */
  useDetailRow: boolean;

  /**
   * Determine if Vuetable is currently in API mode.
   * @see https://www.vuetable.com/api/vuetable/computed.html#isapimode
   */
  isApiMode: boolean;

  /**
   * Determine if Vuetable is currently in Data mode.
   * @see https://www.vuetable.com/api/vuetable/computed.html#isdatamode
   */
  isDataMode: boolean;
}

export interface VuetableMethods<T = VuetableDataRow> {
  /**
   * Parse `fields` definition to field objects usable by Vuetable. This method is called automatically "once" during the `created` life cycle hook.
   *
   * If you dynamically change the `fields` prop, you will need to manually call `normalizeFields` method to properly parse the `fields` definition as Vuetable will not be able to pickup the change and will not work as expected.
   * @see https://www.vuetable.com/api/vuetable/methods.html#normalizefields
   */
  normalizeFields: () => void;

  /**
   * You can use this method to manually set the data that Vuetable will be used for table rendering instead of requesting data from the server.
   *
   * If the `data` parameter is of type Array, Vuetable will use those array as the data to render the table.
   *
   * If the `data` parameter is of type Object, it must be conform to the Data Structure that Vuetable expects (e.g. contains both data and pagination information).
   * @see https://www.vuetable.com/api/vuetable/methods.html#setdata
   */
  setData: (data: T) => void;

  /**
   * Force Vuetable to reload the data from the server using the current value of parameters. However, the page number will not be reset.
   * @see https://www.vuetable.com/api/vuetable/methods.html#reload
   */
  reload: () => void;

  /**
   * Force Vuetable to reload the data from the server and the page number will be reset to 1. It's the same as using goto-page page event to load page 1.
   * @see https://www.vuetable.com/api/vuetable/methods.html#refresh
   */
  refresh: () => void;

  /**
   * This will set `tableData` and `tablePagination` to `null` resulting in not displaying any data in the table (as there is no data to display).
   * This method will also fire `vuetable:data-reset` event which can be captured to force update pagination component accordingly.
   * @see https://www.vuetable.com/api/vuetable/methods.html#resetdata
   */
  resetData: () => void;

  /**
   * This method will automatically request the previous page of data from the server.
   * @see https://www.vuetable.com/api/vuetable/methods.html#gotopreviouspage
   */
  gotoPreviousPage: () => void;

  /**
   * This method will automatically request the next page of data from the server.
   * @see https://www.vuetable.com/api/vuetable/methods.html#gotonextpage
   */
  gotoNextPage: () => void;

  /**
   * This method will automatically request the specified page of data from the server.
   * @see https://www.vuetable.com/api/vuetable/methods.html#changepage
   */
  gotoPage: (page: number) => void;

  /**
   * This method will automatically request the specified page of data from the server.
   * You can either pass in the page number, or 'prev' string for previous page, or 'next' string for next page.
   * @see https://www.vuetable.com/api/vuetable/methods.html#changepage
   */
  changePage: (page: 'prev' | 'next' | number) => void;

  /**
   * Determine if the detail row of the given row identifier is marked as visible.
   * @see https://www.vuetable.com/api/vuetable/methods.html#isvisibledetailrow
   */
  isVisibleDetailRow: (rowId: RowIdentifier) => void;

  /**
   * Force displaying the detail row of the given row
   * @see https://www.vuetable.com/api/vuetable/methods.html#showdetailrow
   */
  showDetailRow: (rowId: RowIdentifier) => void;

  /**
   * Force hiding the detail row of the given row.
   * @see https://www.vuetable.com/api/vuetable/methods.html#hidedetailrow
   */
  hideDetailRow: (rowId: RowIdentifier) => void;

  /**
   * Toggle the display of the detail row of the given row.
   * @see https://www.vuetable.com/api/vuetable/methods.html#toggledetailrow
   */
  toggleDetailRow: (rowId: RowIdentifier) => void;

  /**
   * Force displaying the specified field.
   * @see https://www.vuetable.com/api/vuetable/methods.html#showfield
   */
  showField: (index: number) => void;

  /**
   * Force hiding the specified field.
   * @see https://www.vuetable.com/api/vuetable/methods.html#hidefield
   */
  hideField: (index: number) => void;

  /**
   * Toggle display of the specified field.
   * @see https://www.vuetable.com/api/vuetable/methods.html#togglefield
   */
  toggleField: (index: number) => void;
}

export interface VuetableConstructor<T = VuetableDataRow> extends VueConstructor {
  props: VuetableProps<T>;
  data: () => VuetableData<T>;
  methods: VuetableMethods<T>;
  computed: VuetableComputed<T>;
}

export type VuetableInstance<T = VuetableDataRow> = InstanceType<ExtendedVue<Vue, VuetableData<T>, VuetableMethods<T>, VuetableComputed<T>, VuetableProps<T>>>;

export const Vuetable: VuetableConstructor;
