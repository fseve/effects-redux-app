import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe(({user, loading, error}) => {
      // console.log(user);
      this.usuario = user;
    });

    this.router.params.subscribe(({id}) => {
      // console.log(id);
      this.store.dispatch(cargarUsuario({id}));
    });
  }

}
