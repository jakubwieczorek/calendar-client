import {Template} from "./templates";

export function TemplateAware(constructor: Function)
{
  constructor.prototype.Template = Template;
}
