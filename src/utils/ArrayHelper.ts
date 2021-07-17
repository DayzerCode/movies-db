export default class ArrayHelper {
    /**
     * returns an enum as a string from an array of objects
     * example:
     * call getListAsString([{header: 'test'}, {header: 'test2'}], 'header')
     * return: 'test, test2'
     */
    public static getListAsString(list: any[], propName: string): string {
        if (list.length === 0) {
            return '';
        } else if (list.length === 1) {
            return list[0][propName];
        }

        let array: string[] = [];
        list.map(item => array.push(item[propName]));
        return array.join(', ');
    }
}