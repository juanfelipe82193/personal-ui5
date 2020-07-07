import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DatePicker';

/**
 * <code>import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DatePicker" target="_blank">UI5 Web Components Playground</a>
 */
var DatePicker = withWebComponent('ui5-datepicker', ['formatPattern', 'maxDate', 'minDate', 'name', 'placeholder', 'primaryCalendarType', 'value', 'valueState'], ['disabled', 'readonly'], [], ['change', 'input']);
DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
  disabled: false,
  placeholder: undefined,
  primaryCalendarType: CalendarType.Gregorian,
  readonly: false,
  valueState: ValueState.None
};

export { DatePicker };
//# sourceMappingURL=DatePicker.js.map
