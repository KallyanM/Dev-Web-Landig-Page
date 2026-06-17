import './Testimonials.css';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: 'Carlos Eduardo',
    role: 'Proprietário de Padaria, Cascavel',
    comment: 'Contratamos a Gref Elétrica para a reforma completa do quadro elétrico e cabeamento lógico da nossa padaria. O serviço foi executado no prazo, com extrema organização e sem atrapalhar nosso horário de funcionamento. Super recomendo!',
    rating: 5
  },
  {
    id: 2,
    name: 'Mariana Silva',
    role: 'Residente no Centro, Cascavel',
    comment: 'Instalei dois ares-condicionados split e o sistema solar da minha casa com eles. Desde a visita para orçamento até a finalização, foram extremamente educados e técnicos. Excelente serviço pós-venda também!',
    rating: 5
  },
  {
    id: 3,
    name: 'Roberto Antunes',
    role: 'Gerente Comercial, Toledo',
    comment: 'Precisávamos adequar a fiação e as câmeras da nossa loja comercial. Os técnicos da Gref identificaram riscos que outros eletricistas deixaram passar e resolveram tudo com laudo de conformidade. Nota 10 em segurança!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        <div className="testimonials-header">
          <span className="subtitle">Depoimentos</span>
          <h2 className="testimonials-title">O Que Nossos Clientes Dizem</h2>
          <p className="testimonials-subtitle">
            A satisfação e segurança dos nossos clientes são nossa maior prioridade. Confira algumas avaliações:
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating-stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
