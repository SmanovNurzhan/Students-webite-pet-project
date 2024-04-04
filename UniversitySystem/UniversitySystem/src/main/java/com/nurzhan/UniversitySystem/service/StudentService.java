package com.nurzhan.UniversitySystem.service;

import com.nurzhan.UniversitySystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudent();
}
