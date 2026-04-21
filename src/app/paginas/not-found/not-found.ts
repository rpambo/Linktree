import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Página Não Encontrada</h2>
        <p class="error-message">
          Desculpa, a página que você está procurando não existe ou foi movida.
        </p>
        <div class="error-actions">
          <button class="uk-button uk-button-primary" (click)="goHome()">
            Voltar para Home
          </button>
          <button class="uk-button uk-button-secondary" (click)="goBack()">
            Voltar Anterior
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(155deg, #0c0f1a 0%, #11090d 50%, #0a0508 100%);
      color: #fff;
      padding: 20px;
    }

    .not-found-content {
      text-align: center;
      max-width: 500px;
    }

    .error-code {
      font-size: 120px;
      font-weight: 900;
      margin: 0;
      background: linear-gradient(135deg, #c0392b, #e74c3c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }

    .error-title {
      font-size: 32px;
      margin: 20px 0 15px 0;
      font-weight: 600;
    }

    .error-message {
      font-size: 16px;
      color: #ccc;
      margin-bottom: 40px;
      line-height: 1.6;
    }

    .error-actions {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .uk-button {
      padding: 12px 30px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .uk-button-primary {
      background: linear-gradient(135deg, #c0392b, #e74c3c);
      color: white;
    }

    .uk-button-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(192, 57, 43, 0.3);
    }

    .uk-button-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .uk-button-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 600px) {
      .error-code {
        font-size: 80px;
      }

      .error-title {
        font-size: 24px;
      }

      .error-actions {
        flex-direction: column;
      }

      .uk-button {
        width: 100%;
      }
    }
  `]
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Atualizar meta tags para 404
    document.title = '404 - Página Não Encontrada | Rafael Pambo';
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  goBack(): void {
    window.history.back();
  }
}
