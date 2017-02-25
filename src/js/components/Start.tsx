import * as React from 'react';
import { Link } from 'react-router';

interface StartProps {
    name: string;
};

class Start extends React.Component<StartProps, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/">Start</Link></li>
                    <li><Link to="/items" activeClassName="active">Items</Link></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

export default Start;
