import React, { PureComponent } from "react";
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import SocialSharing from './SocialSharing';
const Header = Layout.Header;

class LayoutHeader extends PureComponent {
    constructor() {
        super();

        this.state = {
            socialItems: [
                {
                    type: 'twitter',
                    url: 'https://twitter.com/politicaparatds'
                },
                {
                    type: 'facebook',
                    url: 'http://fb.me/politicaparatodos.pt'
                },
                {
                    type: 'medium',
                    url: 'https://medium.com/politica-para-todos'
                },
                {
                    type: 'email',
                    url: 'mailto:contacto@politicaparatodos.pt'
                }
            ]
        }
    }
    render() {
        const { socialItems } = this.state;

        return (
            <Header className="header">
                <div className="header-logo" />
                <Menu
                    mode="horizontal"
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Partidos</Menu.Item>
                </Menu>
                <div className="header-social-media">
                    <SocialSharing socialMedia={socialItems} />
                </div>
            </Header>
        );
    }
}

export default LayoutHeader;