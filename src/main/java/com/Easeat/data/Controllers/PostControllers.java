package com.Easeat.data.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Easeat.data.Entity.Post;
import com.Easeat.data.services.PostService;

@RestController
@RequestMapping("/api")
public class PostControllers {
private PostService postService;

    @Autowired
    public PostControllers(PostService postService) {
        this.postService = postService;
    }

   @PostMapping("/posts")
    public Post addPost (@RequestBody Post post){
        post.setId(0);
               return postService.save(post);
    }
    
    @GetMapping("/posts")
    public List<Post> getAllPost(){
        return postService.findAll();
    }

    @GetMapping("/posts/{id}")
    public Post getPost(@PathVariable int id){
        Post myPost =  postService.findById(id);
       if(myPost ==null){
        throw new RuntimeException("เกิดข้อผิดพลาดในกระบวนการทำงาน");
    }
    return myPost;
    }

    @DeleteMapping("/posts/{id}")
    public String deletePost(@PathVariable int id){
        Post myPost =  postService.findById(id);
        if(myPost ==null){
            throw new RuntimeException("เกิดข้อผิดพลาดในกระบวนการทำงาน");
        }
        postService.deleteById(id);
        return "ลบข้อมูลแล้ว";
    }
    @PutMapping("/posts")
    public Post updatePost (@RequestBody Post post){
        return postService.save(post);
}
}
