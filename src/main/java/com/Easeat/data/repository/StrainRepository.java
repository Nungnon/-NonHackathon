package com.Easeat.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Easeat.data.Entity.Strain;

@Repository
public interface StrainRepository extends JpaRepository<Strain, Integer> {
    @Query("SELECT s FROM Strain s WHERE s.user.id = :userId")
    List<Strain> findByUserIdStrain(@Param("userId") int userId);
}


