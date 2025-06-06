import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quizProgress, setQuizProgress] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in animation on mount
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const chapters = [
    {
      id: 0,
      title: "The Spy Princess",
      subtitle: "Born into Two Worlds",
      content: [
        "Noor-un-Nisa Inayat Khan was born on January 1, 1914, in Moscow, into a remarkable family of two worlds. Her father, Hazrat Inayat Khan, was an Indian mystic and musician descended from the royal lineage of Tipu Sultan, the Tiger of Mysore. Her mother, Ora Ray Baker, was an American from New Mexico.",
        "The family moved frequently during Noor's early years - from Russia to London, then to Paris. This cosmopolitan upbringing would later serve her well in her dangerous work during the war. In Paris, she studied child psychology at the Sorbonne and became a published author of children's stories.",
        "When World War II erupted, Noor's world changed forever. The German invasion of France in 1940 forced her family to flee to England, where her extraordinary journey as a secret agent would begin."
      ],
      image: "https://images.pexels.com/photos/6662900/pexels-photo-6662900.jpeg"
    },
    {
      id: 1,
      title: "Joining the Shadow War",
      subtitle: "Special Operations Executive",
      content: [
        "In 1943, Noor Inayat Khan volunteered to join the Women's Auxiliary Air Force (WAAF), demonstrating her commitment to the Allied cause. Her linguistic abilities - she was fluent in French and English - caught the attention of the Special Operations Executive (SOE).",
        "The SOE was Churchill's 'Ministry of Ungentlemanly Warfare,' tasked with conducting espionage and sabotage in Nazi-occupied Europe. Despite initial reservations about her gentle nature and lack of field experience, Noor's unique skills made her invaluable.",
        "She underwent intensive training in wireless telegraphy, codes, weapons, and survival techniques. Her instructors noted her dedication, though some questioned whether this refined woman could handle the brutal realities of occupied France."
      ],
      image: "https://images.pexels.com/photos/1213922/pexels-photo-1213922.jpeg"
    },
    {
      id: 2,
      title: "Behind Enemy Lines",
      subtitle: "Madeleine in Paris",
      content: [
        "On June 16, 1943, Noor was flown to France under the codename 'Madeleine.' She became the first female wireless operator sent by SOE to occupied Paris, one of the most dangerous assignments imaginable.",
        "Her mission was critical: maintain radio contact between the French Resistance and London, coordinating supply drops and operations. As other agents were captured, Noor became the sole radio link for the entire Paris resistance network.",
        "For months, she evaded capture while constantly changing safe houses and transmission locations. The Gestapo was closing in, using radio detection equipment to track her signals. Every transmission could be her last."
      ],
      image: "https://images.unsplash.com/photo-1640108899659-0d3602480145"
    },
    {
      id: 3,
      title: "Betrayal and Capture",
      subtitle: "The Net Closes",
      content: [
        "On October 13, 1943, Noor's luck ran out. Betrayed by a French collaborator, she was captured by the Gestapo at her safe house in Paris. Despite torture and interrogation, she refused to reveal any information about her network or fellow agents.",
        "Her captors found her so dangerous and uncooperative that she was classified as 'Nacht und Nebel' (Night and Fog) - a prisoner to disappear without trace. She was transferred to Pforzheim prison in Germany, kept in solitary confinement and chained hand and foot.",
        "Even in captivity, Noor attempted to escape twice, demonstrating the same courage that had sustained her through her perilous mission in occupied France."
      ],
      image: "https://images.pexels.com/photos/4198074/pexels-photo-4198074.jpeg"
    },
    {
      id: 4,
      title: "The Ultimate Sacrifice",
      subtitle: "Dachau - September 13, 1944",
      content: [
        "After months of imprisonment and torture, Noor Inayat Khan was transferred to Dachau concentration camp. On September 13, 1944, she was executed by SS officers, reportedly shouting 'Liberté!' as her final word.",
        "She was just 30 years old. Her sacrifice was unknown to the world for years after the war ended. It was only through post-war investigations and testimonies from fellow prisoners that her story of courage and ultimate sacrifice came to light.",
        "Noor Inayat Khan became the first Muslim war heroine to be honored by Britain, posthumously awarded the George Cross - the highest civilian decoration for gallantry."
      ],
      image: "https://images.pexels.com/photos/29007331/pexels-photo-29007331.jpeg"
    },
    {
      id: 5,
      title: "Legacy of Courage",
      subtitle: "Remembering the Spy Princess",
      content: [
        "Noor Inayat Khan's legacy extends far beyond her wartime service. She represents the courage of ordinary people who choose to stand against tyranny, regardless of the personal cost.",
        "In 2012, a memorial bust of Noor was unveiled in Gordon Square, London, making her the first Muslim and first Indian-origin woman to be commemorated with a sculpture in the UK.",
        "Her story continues to inspire people worldwide - a reminder that heroism comes in many forms, and that sometimes the greatest courage is shown not on the battlefield, but in the shadows, where ordinary people do extraordinary things for freedom."
      ],
      image: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc"
    }
  ];

  const missionLocations = [
    { name: "Angers", x: 30, y: 60, description: "Initial training location in France" },
    { name: "Paris", x: 50, y: 45, description: "Primary area of operations - radio transmissions" },
    { name: "Le Mans", x: 35, y: 50, description: "Safe house location" },
    { name: "Drancy", x: 52, y: 43, description: "Detention center" },
    { name: "Pforzheim", x: 70, y: 45, description: "Prison in Germany" },
    { name: "Dachau", x: 75, y: 50, description: "Final destination - concentration camp" }
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/3951664/pexels-photo-3951664.jpeg",
      title: "Vintage Radio Equipment",
      description: "Similar to the radio sets used by SOE agents like Noor for covert communications with London."
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/157557/pexels-photo-157557.jpeg",
      title: "Communications Equipment",
      description: "Radio equipment with dials and controls typical of 1940s wireless technology."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae",
      title: "WWII Certificate of Discharge",
      description: "Authentic 1945 military document showing the types of official papers from the era."
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/25809409/pexels-photo-25809409.jpeg",
      title: "Military Artifacts",
      description: "WWII era military helmets and equipment displays."
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/122829/pexels-photo-122829.jpeg",
      title: "Parachute Operations",
      description: "SOE agents were often dropped by parachute behind enemy lines for covert missions."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1629122480915-fb67495540a7",
      title: "SOE Memorial",
      description: "Monument commemorating SOE agents who served during WWII, including Noor Inayat Khan."
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/9240014/pexels-photo-9240014.jpeg",
      title: "Historical Documents",
      description: "Collection of historical papers and documents from the WWII era."
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/1596882/pexels-photo-1596882.jpeg",
      title: "Vintage Photographs",
      description: "Period photographs representing the historical context of Noor's era."
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "What was Noor Inayat Khan's codename during her mission in France?",
      options: ["Madeleine", "Charlotte", "Isabelle", "Sylvie"],
      correct: 0,
      explanation: "Noor operated under the codename 'Madeleine' during her dangerous mission in occupied Paris."
    },
    {
      id: 2,
      question: "From which royal lineage was Noor descended?",
      options: ["Mughal Empire", "Tipu Sultan", "Maratha Empire", "British Royalty"],
      correct: 1,
      explanation: "Noor was descended from Tipu Sultan, the Tiger of Mysore, through her father's lineage."
    },
    {
      id: 3,
      question: "What was the SOE's primary mission?",
      options: ["Direct military combat", "Espionage and sabotage", "Medical support", "Supply transportation"],
      correct: 1,
      explanation: "The SOE (Special Operations Executive) was Churchill's organization for conducting espionage and sabotage in Nazi-occupied Europe."
    },
    {
      id: 4,
      question: "What did Noor reportedly shout as her final word before execution?",
      options: ["Victory!", "Freedom!", "Liberté!", "Remember!"],
      correct: 2,
      explanation: "Witnesses reported that Noor shouted 'Liberté!' (Freedom in French) as her final word before execution."
    },
    {
      id: 5,
      question: "Which prestigious award did Noor receive posthumously?",
      options: ["Victoria Cross", "George Cross", "Distinguished Service Cross", "Military Cross"],
      correct: 1,
      explanation: "Noor was posthumously awarded the George Cross, the highest civilian decoration for gallantry in Britain."
    },
    {
      id: 6,
      question: "Where was the memorial bust of Noor unveiled in 2012?",
      options: ["Trafalgar Square", "Hyde Park", "Gordon Square", "Parliament Square"],
      correct: 2,
      explanation: "A memorial bust of Noor was unveiled in Gordon Square, London, making her the first Muslim woman commemorated with a sculpture in the UK."
    }
  ];

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const goToChapter = (index) => {
    setCurrentChapter(index);
    setShowMap(false);
    setShowGallery(false);
    setShowQuiz(false);
  };

  const toggleView = (view) => {
    setShowMap(view === 'map');
    setShowGallery(view === 'gallery');
    setShowQuiz(view === 'quiz');
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const answerQuestion = (questionIndex, answerIndex) => {
    const newAnswers = { ...userAnswers, [questionIndex]: answerIndex };
    setUserAnswers(newAnswers);
    
    if (Object.keys(newAnswers).length === quizQuestions.length) {
      setQuizCompleted(true);
    }
    
    setQuizProgress(Object.keys(newAnswers).length);
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setQuizCompleted(false);
    setQuizProgress(0);
  };

  const getQuizScore = () => {
    return quizQuestions.reduce((score, question, index) => {
      return score + (userAnswers[index] === question.correct ? 1 : 0);
    }, 0);
  };

  const currentChapterData = chapters[currentChapter];

  return (
    <div className={`min-h-screen bg-newspaper text-newspaper-text transition-all duration-1000 ${fadeIn ? 'animate-fadeIn' : 'opacity-0'}`}>
      {/* Header */}
      <header className="border-b-4 border-newspaper-text py-6 animate-slideDown">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl text-center mb-2 animate-typewriter">
            THE SPY PRINCESS
          </h1>
          <h2 className="font-subtitle text-xl md:text-2xl text-center opacity-90">
            The Extraordinary Story of Noor Inayat Khan
          </h2>
          <div className="text-center mt-4 font-mono text-sm">
            WWII • SPECIAL OPERATIONS EXECUTIVE • HEROISM BEYOND MEASURE
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-newspaper-light border-b-2 border-newspaper-text py-3 animate-slideDown">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => goToChapter(index)}
                className={`px-3 py-1 text-xs border-2 border-newspaper-text transition-all transform hover:scale-105 hover:shadow-md ${
                  currentChapter === index
                    ? 'bg-newspaper-text text-newspaper'
                    : 'bg-newspaper hover:bg-newspaper-light'
                }`}
              >
                {index + 1}. {chapter.title}
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => toggleView('map')}
              className={`px-4 py-2 border-2 border-newspaper-text transition-all transform hover:scale-105 hover:shadow-md ${
                showMap ? 'bg-newspaper-text text-newspaper' : 'bg-newspaper-accent text-newspaper hover:bg-opacity-80'
              }`}
            >
              {showMap ? 'Hide Map' : 'Mission Map'}
            </button>
            <button
              onClick={() => toggleView('gallery')}
              className={`px-4 py-2 border-2 border-newspaper-text transition-all transform hover:scale-105 hover:shadow-md ${
                showGallery ? 'bg-newspaper-text text-newspaper' : 'bg-newspaper-accent text-newspaper hover:bg-opacity-80'
              }`}
            >
              {showGallery ? 'Hide Gallery' : 'Photo Gallery'}
            </button>
            <button
              onClick={() => toggleView('quiz')}
              className={`px-4 py-2 border-2 border-newspaper-text transition-all transform hover:scale-105 hover:shadow-md ${
                showQuiz ? 'bg-newspaper-text text-newspaper' : 'bg-newspaper-accent text-newspaper hover:bg-opacity-80'
              }`}
            >
              {showQuiz ? 'Hide Quiz' : 'Knowledge Quiz'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!showMap && !showGallery && !showQuiz ? (
          /* Story Content */
          <article className="max-w-4xl mx-auto animate-fadeInUp">
            {/* Chapter Header */}
            <div className="text-center mb-8">
              <div className="border-4 border-newspaper-text p-6 bg-newspaper-light vintage-border">
                <h2 className="font-headline text-3xl md:text-5xl mb-2">
                  {currentChapterData.title}
                </h2>
                <h3 className="font-subtitle text-xl md:text-2xl opacity-80">
                  {currentChapterData.subtitle}
                </h3>
                <div className="mt-4 text-sm font-mono">
                  Chapter {currentChapter + 1} of {chapters.length}
                </div>
              </div>
            </div>

            {/* Chapter Image */}
            <div className="mb-8">
              <img
                src={currentChapterData.image}
                alt={currentChapterData.title}
                className="w-full h-64 md:h-96 object-cover border-4 border-newspaper-text transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Chapter Content */}
            <div className="prose prose-lg max-w-none">
              {currentChapterData.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-justify leading-relaxed font-serif text-lg animate-fadeInUp" style={{animationDelay: `${index * 0.3}s`}}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Chapter Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-newspaper-text">
              <button
                onClick={prevChapter}
                disabled={currentChapter === 0}
                className={`px-6 py-3 border-2 border-newspaper-text transition-all transform hover:scale-105 ${
                  currentChapter === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-newspaper-light hover:shadow-md'
                }`}
              >
                ← Previous Chapter
              </button>
              
              <div className="text-center">
                <div className="text-sm font-mono mb-1">Progress</div>
                <div className="flex gap-1">
                  {chapters.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 border border-newspaper-text transition-all duration-500 ${
                        index <= currentChapter ? 'bg-newspaper-text animate-fillIn' : 'bg-newspaper'
                      }`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextChapter}
                disabled={currentChapter === chapters.length - 1}
                className={`px-6 py-3 border-2 border-newspaper-text transition-all transform hover:scale-105 ${
                  currentChapter === chapters.length - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-newspaper-light hover:shadow-md'
                }`}
              >
                Next Chapter →
              </button>
            </div>
          </article>
        ) : showMap ? (
          /* Interactive Map */
          <div className="max-w-6xl mx-auto animate-fadeInUp">
            <div className="text-center mb-8">
              <h2 className="font-headline text-3xl md:text-4xl mb-4">
                Noor's Mission Locations
              </h2>
              <p className="text-lg opacity-90">
                Follow the journey from training to her final destination
              </p>
            </div>

            <div className="bg-newspaper-light border-4 border-newspaper-text p-8">
              <div className="relative aspect-video bg-newspaper border-2 border-newspaper-text overflow-hidden">
                {/* Map Background */}
                <img
                  src="https://images.pexels.com/photos/5302808/pexels-photo-5302808.jpeg"
                  alt="Historical Map"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-newspaper bg-opacity-70">
                  <div className="relative w-full h-full">
                    {missionLocations.map((location, index) => (
                      <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                        style={{ left: `${location.x}%`, top: `${location.y}%` }}
                      >
                        <div className="w-4 h-4 bg-newspaper-accent border-2 border-newspaper-text rounded-full animate-pulse transform hover:scale-150 transition-transform duration-300">
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-fadeInUp">
                          <div className="bg-newspaper-text text-newspaper p-2 rounded border-2 border-newspaper-accent whitespace-nowrap text-sm">
                            <div className="font-bold">{location.name}</div>
                            <div className="text-xs">{location.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Map Legend */}
                    <div className="absolute bottom-4 left-4 bg-newspaper border-2 border-newspaper-text p-4 animate-slideInLeft">
                      <h4 className="font-bold mb-2">Mission Timeline</h4>
                      <div className="text-sm space-y-1">
                        <div>1943: Training in Angers</div>
                        <div>June 1943: Deployed to Paris</div>
                        <div>Oct 1943: Captured, held at Drancy</div>
                        <div>1944: Imprisoned at Pforzheim</div>
                        <div>Sept 1944: Final journey to Dachau</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : showGallery ? (
          /* Photo Gallery */
          <div className="max-w-6xl mx-auto animate-fadeInUp">
            <div className="text-center mb-8">
              <h2 className="font-headline text-3xl md:text-4xl mb-4">
                Historical Artifacts Gallery
              </h2>
              <p className="text-lg opacity-90">
                Explore artifacts and equipment from Noor's era
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="bg-newspaper-light border-2 border-newspaper-text p-4 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-staggerIn"
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => openImageModal(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover border-2 border-newspaper-text mb-3"
                  />
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm opacity-80">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Knowledge Quiz */
          <div className="max-w-4xl mx-auto animate-fadeInUp">
            <div className="text-center mb-8">
              <h2 className="font-headline text-3xl md:text-4xl mb-4">
                Test Your Knowledge
              </h2>
              <p className="text-lg opacity-90">
                How well do you know Noor Inayat Khan's story?
              </p>
              {quizCompleted && (
                <div className="mt-4 p-4 bg-newspaper-accent text-newspaper border-2 border-newspaper-text animate-bounce">
                  <h3 className="font-bold text-xl">Quiz Complete!</h3>
                  <p>You scored {getQuizScore()} out of {quizQuestions.length}</p>
                  <button 
                    onClick={resetQuiz}
                    className="mt-2 px-4 py-2 bg-newspaper text-newspaper-text border-2 border-newspaper-text hover:bg-newspaper-light transition-all"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((question, questionIndex) => (
                <div 
                  key={question.id} 
                  className="bg-newspaper-light border-2 border-newspaper-text p-6 animate-staggerIn"
                  style={{animationDelay: `${questionIndex * 0.2}s`}}
                >
                  <h3 className="font-bold text-lg mb-4">
                    {questionIndex + 1}. {question.question}
                  </h3>
                  
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => answerQuestion(questionIndex, optionIndex)}
                        className={`w-full text-left p-3 border-2 border-newspaper-text transition-all transform hover:scale-102 ${
                          userAnswers[questionIndex] === optionIndex
                            ? userAnswers[questionIndex] === question.correct
                              ? 'bg-green-200 border-green-600'
                              : 'bg-red-200 border-red-600'
                            : 'bg-newspaper hover:bg-newspaper-accent hover:text-newspaper'
                        }`}
                        disabled={userAnswers[questionIndex] !== undefined}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                      </button>
                    ))}
                  </div>

                  {userAnswers[questionIndex] !== undefined && (
                    <div className="mt-4 p-3 bg-newspaper border border-newspaper-text animate-fadeInUp">
                      <p className="text-sm opacity-90">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="text-sm font-mono mb-2">Progress: {quizProgress} / {quizQuestions.length}</div>
              <div className="w-full bg-newspaper border-2 border-newspaper-text h-4">
                <div 
                  className="h-full bg-newspaper-accent transition-all duration-500"
                  style={{width: `${(quizProgress / quizQuestions.length) * 100}%`}}
                ></div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fadeIn" onClick={closeImageModal}>
          <div className="max-w-4xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-screen object-contain border-4 border-newspaper-text animate-scaleIn"
            />
            <div className="bg-newspaper border-2 border-newspaper-text p-4 mt-4">
              <h3 className="font-bold text-xl mb-2">{selectedImage.title}</h3>
              <p className="opacity-90">{selectedImage.description}</p>
              <button 
                onClick={closeImageModal}
                className="mt-3 px-4 py-2 bg-newspaper-accent text-newspaper border-2 border-newspaper-text hover:bg-opacity-80 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t-4 border-newspaper-text bg-newspaper-light py-6 mt-12 animate-slideUp">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-sm">
            "I wish some Indians would win high military distinction in this war. 
            If one or two could do something in the Allied service which was very brave and which everybody admired it would help to make a bridge between the English and the Indians."
          </p>
          <p className="mt-2 text-xs opacity-80">— Noor Inayat Khan</p>
        </div>
      </footer>
    </div>
  );
};

export default App;