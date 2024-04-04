package com.nurzhan.UniversitySystem.controller;

import com.nurzhan.UniversitySystem.model.Student;
import com.nurzhan.UniversitySystem.service.StudentService;
import com.nurzhan.UniversitySystem.service.StudentServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@AllArgsConstructor
@CrossOrigin
public class StudentController {
    private StudentService studentService;

    @PostMapping("/addStudent")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "new Student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudent();
    }

}
