import { I18nProvider } from '../I18nProvider';
import BenchmarkPage from './BenchmarkPage';

export default function BenchmarkPageWrapper() {
  return (
    <I18nProvider>
      <BenchmarkPage />
    </I18nProvider>
  );
}
