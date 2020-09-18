import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from "./nav.module.css"
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Popover, Grid, Container, Card, CardMedia, CardActions, CardHeader, Divider, Typography, IconButton } from '@material-ui/core';
import { Slide, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import axios from 'axios';
import CrudAlumnos from './crudAlumno';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ButtonAppBar() {
  const [openEdit, setOpenEdit] = useState(false);
  const [putUsuario, setPutUsuario] = useState('')

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleConfirm = () => {
    setOpenEdit(false);
    putUsuario.emails.split(',').map(elem => {
      axios.post('http://localhost:3006/alumnos/agregar',
        {
          email: elem
        }, { withCredencials: true })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
  };
  //handleSubmit
  const handleSubmit = (e) => {
    setPutUsuario({
      ...putUsuario,
      [e.target.name]: e.target.value,
    })
  }
  // ----------------------------------------------------------
  const [openEdit2, setOpenEdit2] = useState(false);
  const handleClickOpenEdit2 = () => {
    setOpenEdit2(true);
  };

  const handleCloseEdit2 = () => {
    setOpenEdit2(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={s.nav}>
          <Typography variant="h6" className={classes.title}>
            <span className={s.titulo}>Cohorte</span>
          </Typography>
          <IconButton color='primary' onClick={handleClickOpenEdit2}>
            <ListIcon />
          </IconButton>
          <Dialog maxWidth='lg' fullWidth open={openEdit2} onClose={handleCloseEdit2} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <DialogContent>
              <CrudAlumnos />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEdit2} color="secondary">
                Cerrar
            </Button>
            </DialogActions>
          </Dialog>

          {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <IconButton color='primary' onClick={handleClickOpenEdit}>
            <EditIcon />
          </IconButton>
          <Dialog open={openEdit} onClose={handleCloseEdit} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="form-dialog-title">Agregar Estudiantes</DialogTitle>
            <DialogContent>
              <TextField onChange={handleSubmit} value={putUsuario.emails} label="E-mails" name="emails" autoFocus margin="dense" type="text" color='secondary' fullWidth />
              {/* <TextField onChange={handleSubmit} value={putUsuario.apellido} label="Apellido" name="apellido" autoFocus margin="dense" type="text" color='secondary' fullWidth />
              <TextField onChange={handleSubmit} value={putUsuario.edad} label="Edad" name="edad" autoFocus margin="dense" type="text" color='secondary' fullWidth />
              <TextField onChange={handleSubmit} value={putUsuario.email} label="Email" name="email" autoFocus margin="dense" type="text" color='secondary' fullWidth /> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEdit} color="secondary">
                Cancelar
            </Button>
              <Button onClick={() => {
                handleConfirm();
              }} color="secondary">
                Agregar
            </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
}