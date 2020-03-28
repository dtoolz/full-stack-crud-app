<template>
  <div class="list">
    <div id="todo-lists" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center pt-3">Dtoolz CRUD APP</h1>
          <h5 class="text-center py-3 text-capitalize">
            please list your todo activities for today
          </h5>
          
          <form v-on:submit.prevent="addNewTodo">
            <input
              type="text"
              v-model="todoName"
              id="todoNameInput"
              class="form-control"
              placeholder="add a todo item"
            />
            <button
              v-if="this.editState == false"
              type="submit"
              class="text-white btn btn-success btn-block mt-3"
            >
              Make Todo
            </button>
            <button
              v-else
              type="button"
              v-on:click.prevent="updateTodo()"
              class="text-white btn btn-secondary btn-block mt-3"
            >
              Update Todo
            </button>
          </form>

           <h3 class="text-capitalize text-center mt-5">your current todo list</h3>
          <ul v-for="todo in todos" v-bind:key="todo.id" v-bind:title="todo.title" class="list-group mb-2">
            <li class="list-group-item text-capitalize d-flex justify-content-between my-2">
              <h6>{{todo.title}}</h6>
              <div className="todo-icon">
                <span class="mx-2 text-success">
                  <i class="fas fa-edit" v-on:click="editTodoItem(todo.title, todo._id)" />
                </span>
                <span class="mx-2 text-danger" >
                  <i class="fas fa-trash" v-on:click="deleteTodoItem(todo._id)"  />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const API_URL = "http://localhost:3000";
import axios from "axios"

export default {
    name: "List",
    data(){
       return {
           todos: [],
           id: '',
           todoName: '',
           editState: false
       }
    },

    mounted(){
        this.getTodos()
    },

    methods : {
      getTodos(){
        const url = `${API_URL}/api/todos`;
        axios.get(url).then(
            response => {
                console.log(response.data);
                this.todos = response.data;
            },
            error => {
                console.log(error);
            }
        )
      },

      addNewTodo(){
        const urlPost = `${API_URL}/api/todo`;
          axios.post(urlPost, { title: this.todoName}).then(
              response => {
                  this.todoName ='';
                  this.getTodos();
                  console.log(response);
              }
          ).catch(err => {
              console.log(err);
          })
      },

      editTodoItem(title, id){
        this.id = id;
        this.todoName = title;
        this.editState = true;
      },

      updateTodo(){
        const urlUpdate = `${API_URL}/api/todo/${this.id}`;
        axios.put(urlUpdate, { title: this.todoName }).then(
            response => {
                this.todoName = '';
                this.editState = false;
                this.getTodos();
                console.log(response);
            }
        ).catch(err => {
            console.log(err);
        });
      },

      deleteTodoItem(id){
        const urlDelete = `${API_URL}/api/todo/${id}`;
        axios.delete(urlDelete).then( response => {
                this.todoName = '';
                this.getTodos();
                console.log(response);
        }).catch(err => {
            console.log(err);
        });
      }
    }
}
</script>