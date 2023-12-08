package com.notifapp.notificationservice.service;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private final SimpMessagingTemplate messagingTemplate;

    public NotificationService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendNotification(String content) {
        NotificationMessage message = new NotificationMessage();
        message.setContent(content);
        messagingTemplate.convertAndSend("/topic/notification", message);
    }
}
