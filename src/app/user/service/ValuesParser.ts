export module ValuesProvider
{
  let importance: Map<string, number> = new Map<string, number>();
  importance.set("lazy", 1);
  importance.set("very important", 3);
  importance.set("important", 2);

  export function getImportanceValue(aValue: string)
  {
    return importance.get(aValue);
  }
}
