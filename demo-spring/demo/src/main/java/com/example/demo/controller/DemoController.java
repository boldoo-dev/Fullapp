package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.data.DemoData;
import com.example.demo.service.DemoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/demo")
@RequiredArgsConstructor
public class DemoController {

    private final DemoService demoService;
    
    @GetMapping("/demoTest") 
    public DemoData demoTest() {
        return demoService.demoTest();
    }

    @PostMapping("updateData")
    public void updateData(@RequestBody DemoData demoData) {
        demoService.updateData(demoData);
    }

}
