package com.nurzhan.UniversitySystem.repository;

import com.nurzhan.UniversitySystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
}
