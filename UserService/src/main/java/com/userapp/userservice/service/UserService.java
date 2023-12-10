package com.userapp.userservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.userapp.userservice.models.DTOMapper;
import com.userapp.userservice.models.UserDTO;
import com.userapp.userservice.models.UserModel;
import com.userapp.userservice.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class UserService {
    @Autowired
    JmsTemplate jmsTemplate;

    private final UserRepository userRepository;
    private final RestTemplate restTemplate;

    @Autowired
    public UserService(UserRepository userRepository, RestTemplate restTemplate) {
        this.userRepository = userRepository;
        this.restTemplate = restTemplate;
    }

    public List<UserModel> getAllUsers() {
        List<UserModel> userList = new ArrayList<>();
        userRepository.findAll().forEach(userList::add);
        return userList;
    }

    public Optional<UserModel> getUser(String id) {
        return userRepository.findById(Integer.valueOf(id));
    }

    public Optional<UserModel> getUser(Integer id) {
        return userRepository.findById(id);
    }

    public void sendMsg(UserDTO userDTO) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+userDTO+"]");
        jmsTemplate.convertAndSend("RESULT_BUS_MNG",userDTO);
    }

    public void sendMsg(UserDTO userDTO, String busName) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+userDTO+"] to Bus=["+userDTO+"]");
        jmsTemplate.convertAndSend(busName,userDTO);
    }


    public UserDTO addUser(UserDTO user) {
        UserModel u = fromUDtoToUModel(user);
        // needed to avoid detached entity passed to persist error
        userRepository.save(u);
        // Ajouter des cartes en appelant la méthode addCard de SuperService
        for (int i = 0; i < 5; i++) {
            ResponseEntity<CardDTO> response = restTemplate.exchange(
                    "http://super-service/card",
                    HttpMethod.POST,
                    new HttpEntity<>(new CardDTO()),
                    CardDTO.class
            );
            CardDTO card = response.getBody();
            if (card != null) {
                CardModel cardModel = DTOMapper.fromCardDtoToCardModel(card);
                uBd.addCard(cardModel);
            }
        }
        UserModel uBd = userRepository.save(u);
        return DTOMapper.fromUserModelToUserDTO(uBd);
    }

    public UserDTO updateUser(UserDTO user) {
        UserModel u = fromUDtoToUModel(user);
        UserModel uBd =userRepository.save(u);
        return DTOMapper.fromUserModelToUserDTO(uBd);
    }

    public UserDTO updateUser(UserModel user) {
        UserModel uBd = userRepository.save(user);
        return DTOMapper.fromUserModelToUserDTO(uBd);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(Integer.valueOf(id));
    }

    public List<UserModel> getUserByLoginPwd(String login, String pwd) {
        List<UserModel> ulist = null;
        ulist = userRepository.findByLoginAndPwd(login, pwd);
        return ulist;
    }

    private UserModel fromUDtoToUModel(UserDTO user) {
        UserModel u = new UserModel(user);
        List<CardModel> cardList = new ArrayList<CardModel>();
        for (Integer cardId : user.getCardList()) {
            Optional<CardModel> card = cardModelService.getCard(cardId);
            if (card.isPresent()) {
                cardList.add(card.get());
            }
        }
        return u;
    }
}
