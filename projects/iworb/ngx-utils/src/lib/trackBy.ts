export function trackBy(propName: string): (item: any) => any {
  return (item: any): any => {
    return item && Object.prototype.hasOwnProperty.call(item, propName) && item[propName];
  };
}
