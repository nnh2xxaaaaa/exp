import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from 'src/app/index/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private readonly httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<Students>("http://localhost:5200/student");
  }

  delete(id: string) {
    return this.httpClient.delete(`http://localhost:5200/student/${id}`)
  }
}
