import React, { useState, forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useSelector, useDispatch } from "react-redux";
import { getAlumnosid } from '../../../../store/actions/alumnos'


const tableIcons = {
    
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
    { title: 'Nombre', field: 'nombre' },
    { title: 'Apellido', field: 'apellido' },
    { title: 'E-mail', field: 'email' },
    { title: 'Rol', field: 'rol' },
    { title: 'Cohorte', field: 'cohorteId', type: 'numeric' },
    { title: 'Grupo', field: 'grupoId', type: 'numeric' },
    { title: 'Grupo-PP', field: 'pairId', type: 'numeric' }
]

export default function CrudAlumnos() {
    const dispatch = useDispatch();

    const cohorte = useSelector((state) => state.cohorte.cohortes);
    const alumnos = useSelector((state) => state.alumnos.alumnos);


    return (
        <MaterialTable
            title="Editar Estudiantes"
            icons={tableIcons}
            columns={columns}
            data={alumnos}
            editable={{
               
                onRowUpdate: <div> </div>,
                onRowDelete: <div> </div> 
            }}
        />
    );
}