import React, {useState} from 'react';
import { View, ScrollView, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';

const questions = [
  {
    id: '1',
    question: '¿Cuál es el país más grande de Sudamérica?',
    options: ['Argentina', 'Brasil', 'Colombia', 'Perú'],
    answer: 'Brasil',
  },
  {
    id: '2',
    question: '¿Cuál es la capital de Japón?',
    options: ['Kioto', 'Tokio', 'Kobe', 'Osaka'],
    answer: 'Tokio',
  },
  {
    id: '3',
    question: '¿En qué continente se encuentra Egipto?',
    options: ['América', 'Asia', 'Oceanía', 'África'],
    answer: 'África',
  },
  {
    id: '4',
    question: '¿Qué país con la mayor cantidad de habitantes en el mundo?',
    options: ['China', 'Bangladesh', 'Estados Unidos', 'Rusia'],
    answer: 'China',
  },
  {
    id: '5',
    question: '¿Cuál es el océano más grande del mundo?',
    options: ['Índico', 'Atlántico', 'Pacífico', 'Ártico'],
    answer: 'Pacífico',
  },
];

export default function QuizScreen() {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));

  const handleSelect = (questionId, option) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionId] = option;
    setSelectedAnswers(updatedAnswers); 
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        correctAnswers++;
      }
    });

    Alert.alert(`Has respondido correctamente ${correctAnswers} de ${questions.length} preguntas.`);
  };

  return (
    <ScrollView style={styles.container}>
      {questions.map((question, index) => (
        <View key={question.id} style={{marginBottom: 20}}>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.options.map(option => (
            <TouchableOpacity 
              key={option} 
              onPress={() => handleSelect(index, option)}
              style={[styles.optionButton, selectedAnswers[index] === option ? {backgroundColor: '#cce5ff'} : null]}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar respuestas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  questionText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 5,
  },
  submitButton: {
    backgroundColor: 'darkblue',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 40,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});