import React from 'react';

export const PersonCart =({person,index})=> {



    return (
        <tr key={person.id}>
            <td >
                <span>Имя</span> {person.firstName}
            </td>
            <td >
                <span>Фамилия</span>
                {person.lastName}
            </td>
            <td>
                <i className="fas fa-trash-alt"/>
                <i

                    className="fas fa-edit"
                />
            </td>
        </tr>
    );
}
