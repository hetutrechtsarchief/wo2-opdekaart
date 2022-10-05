export class UtilService {
    public static labelMatchesSearch(label: string, search: string, searchIsLowered = false) {
        if(!search) {
            return true;
        }

        if (searchIsLowered) {
            return label.toLowerCase().includes(search);
        }

        return label.toLowerCase().includes(search.toLowerCase());
    }
}