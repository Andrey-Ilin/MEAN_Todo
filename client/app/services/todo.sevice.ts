import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
    constructor(private _http: Http){}

    getTodos() {
        return this._http.get('/api/v1/todos')
    }

    saveTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/todo', JSON.stringify(todo), {headers})
            .map(res => {
                res.json();
                console.log(res)
            })
    }

    updateTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/v1/todo/' + todo._id, JSON.stringify(todo), {headers});
    }

    deleteTodo(id) {
        return this._http.delete('/api/v1/todo/' + id)
    }
}