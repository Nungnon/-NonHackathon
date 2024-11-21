package com.Easeat.data.Action;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Easeat.data.Entity.Comment;
import com.Easeat.data.repository.CommentRepository;
import com.Easeat.data.services.CommentService;
@Service
public class CommentServiceAction implements CommentService{

    
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comment save(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    @Override
    public Comment findById(Integer id) {
         Optional<Comment> result = commentRepository.findById(id);
         Comment data=null;
        if(result.isPresent()){
            data=result.get();
        }else{
            throw new RuntimeException("ไม่พบข้อมูล"+id);
        }
        return data;
    }

    @Override
    public void deleteById(Integer id) {
        if (commentRepository.existsById(id)) {
            commentRepository.deleteById(id);
        } else {
            throw new RuntimeException("ไม่สามารถลบ Comment ID: " + id + " เพราะไม่พบในระบบ");
        }
    }
 
}
