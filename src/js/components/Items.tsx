import * as React from 'react';
import { Link } from 'react-router';
import Item from './Item';

interface ItemsProps {
}

interface ItemsStates {
    items: Object[];
};

interface ItemData {
    id: number;
    name: string;
};

class Items extends React.Component<ItemsProps, ItemsStates> {

    constructor(props: ItemsProps) {
        super(props);
        this.state = {
            items: []
        };
    }

    protected componentDidMount(): void {
        window.fetch('./data/items.json')
            .then((response: Response) => {
                response
                    .json()
                    .then((json: ItemData[]) => {
                        this.setState({
                            items: json
                        });
                    });
                });
    }

    public render(): JSX.Element {
        const items: JSX.Element[] = this.state.items.map(
                (item: ItemData, i: number) => {
                    return <Link to={`/items/${item.id}`} key={item.id}>{item.name}<br /></Link>;
                }
            );

        return (<div>{items}</div>);
    }
}

export default Items;
