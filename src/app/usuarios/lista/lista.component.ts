import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[] = [];
  public loading: boolean = false;
  public error: any;

  // constructor(private usuarioService: UsuarioService) { }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe(({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch(cargarUsuarios());
    // this.usuarioService.getUsers().subscribe(users => {
    //   console.log(users);
    //   this.usuarios = users;
    // });
  }

}
