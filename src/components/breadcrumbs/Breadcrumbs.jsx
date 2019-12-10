import React from 'react';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

/**
 * Компонент хлебных крошек.
 * @param links - массив объектов ссылок вида {route: '/abc', name: "Abc route"}.
 * todo: не дописал немного, создать файл index(smart-component), закконектить к стору с роутами, разбить текущий url и скормить сюда,
 * todo: пример. /abc/def/1 отдаеем сюда в виде [{route: '/abc', name: 'Example'}, {route: 'def', name: 'Example 2'}...]
 * */
export default ({links}) => {
    const _links = [...links];
    //дробим наш массив урлов. Что бы последний был не кликабельным и отрисовываем его в типографии
    const [{name: currentPath}] = _links.splice(_links.length - 1, 1);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                _links.map(link => (
                        <Link color="inherit" href={link.route} key={link.route}>
                            {link.name}
                        </Link>
                    )
                )
            }
            <Typography color="textPrimary">{currentPath}</Typography>
        </Breadcrumbs>
    );
};
