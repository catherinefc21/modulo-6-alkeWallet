package cl.alke.wallet.repository;

import cl.alke.wallet.model.Card;
import cl.alke.wallet.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

    List<Card> findByUserUserId(Long userId);
    Card findByCardNumberAndUser(String cardNumber, User user);

}
