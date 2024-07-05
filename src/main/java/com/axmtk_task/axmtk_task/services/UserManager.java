package com.axmtk_task.axmtk_task.services;

import com.axmtk_task.axmtk_task.models.Client;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import java.util.List;

public class UserManager {
    SessionFactory sessionFactory;

    public void init(){
        this.sessionFactory = new Configuration().
                addAnnotatedClass(Client.class).
                buildSessionFactory();
    }

    public List<Client> getAllUser() {
        try (Session session = sessionFactory.openSession()) {
            Query<Client> query = session.createQuery("from User", Client.class);
            return query.list();
        }
    }

    public void addUser(Client user ) {
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            session.persist(user);
            transaction.commit();
        }
    }
}