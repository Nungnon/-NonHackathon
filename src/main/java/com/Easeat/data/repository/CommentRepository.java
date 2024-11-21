package com.Easeat.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Easeat.data.Entity.Comment;


public interface CommentRepository extends JpaRepository<Comment,Integer>{

}
