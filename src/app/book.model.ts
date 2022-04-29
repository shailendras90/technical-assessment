export class Books {
    id: string;
    name: string;
    image: string;
    link: string;
    description: {
        author: string,
        pubisher: string
    };

    /**
 * Constructor
 *
 * @param book
 */
    constructor(book:any) {
        this.id = book?.id;
        this.name = book.attributes?.content;
        this.image = book.attributes?.display_properties?.image;
        this.link = book.links?.self;
        this.description = {
            author:  book.relationships?.authors?.links?.self,
            pubisher: book.relationships?.authors?.links?.self
        };
    }

}