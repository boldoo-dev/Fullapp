package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.data.DemoData;

@Service
public class DemoService {

    private DemoData demoData = new DemoData();
    
    public DemoData demoTest() {
        return demoData;
    }

    public void updateData(DemoData updatedData) {
        this.demoData.setData(updatedData.getData());
    }

}
