const mockData = {
    community: {
      posts: [
        {
          author: "Maria Silva",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          content: "Acabei de completar minha primeira semana no programa Mover para Cuidar! Estou me sentindo mais disposta e energizada.",
          likes: 24,
          comments: 8,
        },
        {
          author: "João Santos",
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
          content: "Dica de nutrição: Comecei a incluir mais proteínas vegetais no almoço e notei uma diferença incrível na minha energia durante a tarde!",
          likes: 15,
          comments: 5,
        },
      ],
      leaderboard: [
        { name: "Ana Oliveira", points: 2500, position: 1 },
        { name: "Carlos Lima", points: 2350, position: 2 },
        { name: "Patricia Santos", points: 2200, position: 3 },
      ],
      activeUsers: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      ],
    },
  
    dashboard: {
      metrics: [
        { title: "Saúde Física", value: "75%", label: "Meta Atingida", icon: "activity" },
        { title: "Saúde Mental", value: "82%", label: "Bem-estar", icon: "brain" },
        { title: "Nutrição", value: "68%", label: "Dieta Balanceada", icon: "utensils" },
        { title: "Ranking", value: "#42", label: "Sua Posição", icon: "trophy" },
      ],
      events: [
        { title: "Mover para Cuidar", date: "Amanhã, 15:00", description: "Sessão de exercícios em grupo" },
        { title: "Rato de Academia", date: "Quinta, 17:00", description: "Treino funcional" },
      ],
      tips: [
        { title: "Hidratação", description: "Lembre-se de beber água regularmente durante o dia" },
        { title: "Pausas Ativas", description: "Faça pequenas pausas para alongamento a cada 2 horas" },
      ],
    },
  
    healthTracker: {
      physical: {
        metrics: [
          { label: "Frequência Cardíaca", value: "75", unit: "bpm" },
          { label: "Peso", value: "70", unit: "kg" },
        ],
        activities: [
          { activity: "Corrida", duration: "30 min", intensity: "Moderada", date: "Hoje" },
          { activity: "Musculação", duration: "45 min", intensity: "Alta", date: "Ontem" },
        ],
      },
      mental: {
        mood: "Feliz",
        stressLevel: "Baixo",
        journal: "Hoje me senti muito motivado e consegui completar todas as minhas tarefas!",
      },
      nutrition: {
        waterIntake: "2L",
        meals: [
          { name: "Café da manhã", items: ["Ovos", "Pão integral", "Suco de laranja"] },
          { name: "Almoço", items: ["Frango grelhado", "Quinoa", "Salada"] },
        ],
      },
    },
  
    programs: [
      {
        title: "Mover para Cuidar",
        description: "Sessões de exercícios em grupo focadas em movimento e bem-estar",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
        participants: 45,
        duration: "8 semanas",
        nextSession: "Terça, 15:00",
      },
      {
        title: "Rato de Academia",
        description: "Programa de treino funcional para todos os níveis",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
        participants: 32,
        duration: "12 semanas",
        nextSession: "Quinta, 17:00",
      },
    ],
  
    recipes: {
      weeklyMenu: [
        { day: "Segunda", mainDish: "Frango Grelhado", sideDish: "Quinoa com Legumes", salad: "Mix de Folhas", dessert: "Frutas Frescas" },
        { day: "Terça", mainDish: "Peixe ao Forno", sideDish: "Arroz Integral", salad: "Salada Caprese", dessert: "Iogurte Natural" },
      ],
      communityPosts: [
        {
          username: "Maria Silva",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
          description: "Meu almoço de hoje seguindo o cardápio: Frango grelhado com quinoa e legumes. Adorei a combinação!",
          likes: 24,
          comments: 8,
          menuItem: "Segunda-feira",
        },
        {
          username: "João Santos",
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
          description: "Adaptei o cardápio de hoje com mais vegetais. Ficou incrível!",
          likes: 16,
          comments: 5,
          menuItem: "Terça-feira",
        },
      ],
      featuredRecipes: [
        {
          title: "Bowl de Açaí Proteico",
          image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02",
          time: "10 min",
          servings: "2",
          chef: "Nutricionista Ana",
          difficulty: "Fácil",
        },
      ],
    },
  };
  
  export default mockData;
  