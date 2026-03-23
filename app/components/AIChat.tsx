'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import styles from './AIChat.module.css';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: '안녕하세요! CM한국지점 AI 어시스턴트입니다. 제품 문의나 기술 지원 등 궁금하신 점이 있으신가요?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI logic
    setTimeout(() => {
      let botResponse = "죄송합니다. 구체적인 문의사항은 [문의하기] 버튼을 통해 남겨주시면 담당자가 신속히 답변해 드리겠습니다.";
      
      const lowerMsg = userMsg.toLowerCase();
      if (lowerMsg.includes('방폭') || lowerMsg.includes('인증')) {
        botResponse = "CM한국지점은 미군 부대 납품 기준을 충족하는 CSA/UL 마크 및 ATEX 방폭 인증 호이스트 전문입니다. STAHL과 CM 브랜드의 다양한 방폭 라인업을 보유하고 있습니다.";
      } else if (lowerMsg.includes('yale') || lowerMsg.includes('예일')) {
        botResponse = "Yale 브랜드는 글로벌 표준의 우수성을 자랑하며, 전동 와이어 로프 호이스트와 수동 리프팅 장비 등 다양한 라인업이 준비되어 있습니다. [Products] 메뉴에서 상세 정보를 확인하실 수 있습니다.";
      } else if (lowerMsg.includes('수리') || lowerMsg.includes('as') || lowerMsg.includes('a/s')) {
        botResponse = "저희는 단순 유통뿐만 아니라 전문적인 유지보수 및 순정 부품 공급 서비스를 제공합니다. 장비 일련번호와 함께 문의해 주시면 빠른 서비스가 가능합니다.";
      } else if (lowerMsg.includes('위치') || lowerMsg.includes('어디')) {
        botResponse = "CM한국지점은 경기도 성남시 분당구 방아로 68에 위치하고 있습니다. [About Us] 페이지에서 지도를 확인하실 수 있습니다.";
      } else if (lowerMsg.includes('견적') || lowerMsg.includes('가격')) {
        botResponse = "상세 견적은 현장 상황과 사양에 따라 달라질 수 있습니다. [문의하기] 메뉴에서 양식을 작성해 주시면 전문가가 직접 연락드리겠습니다.";
      }

      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className={styles.chatWrapper}>
      {!isOpen && (
        <button className={styles.floatingBtn} onClick={() => setIsOpen(true)}>
          <MessageSquare size={28} />
          <span className={styles.tooltip}>AI 상담원</span>
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWindow}>
          <header className={styles.header}>
            <div className={styles.headerInfo}>
              <div className={styles.onlineStatus}></div>
              <h3>AI 어시스턴트</h3>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </header>

          <div className={styles.messages} ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.messageRow} ${msg.role === 'user' ? styles.userRow : styles.botRow}`}>
                <div className={styles.avatar}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={styles.bubble}>{msg.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className={styles.botRow}>
                <div className={styles.avatar}><Bot size={16} /></div>
                <div className={styles.bubble}>
                  <div className={styles.typing}><span></span><span></span><span></span></div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.inputArea}>
            <input 
              type="text" 
              placeholder="궁금한 점을 물어보세요..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className={styles.sendBtn} onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
