import React from 'react';
import { Link } from 'react-router-dom';

import ArchitectsAPI from '../../ArchitectsAPI';

// это пример
const AllArchitects = () => (
    // Компонент поиска
    // Компонент Список архитекторов
    <div>
        <ul>
            {
                ArchitectsAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/architects/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default AllArchitects;