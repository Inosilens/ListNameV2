import React from 'react';
import {TableHead} from "../components/TableHead";
import {TableBody} from "../components/TableBody";

export const Table =(props)=> {


    return (<>

        <table className="resp-tab">
            <TableHead/>
            <TableBody/>
        </table>
        </>
    );
}
