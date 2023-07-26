export class PCA {
  n_components: number | null;
  copy: boolean;
  whiten: boolean;
  svd_solver: string;
  tol: number;
  iterated_power: string;
  n_oversamples: number;
  power_iteration_normalizer: string;
  random_state: any | null;

  constructor(
    n_components: number | null = null,
    {
      copy = true,
      whiten = false,
      svd_solver = "auto",
      tol = 0.0,
      iterated_power = "auto",
      n_oversamples = 10,
      power_iteration_normalizer = "auto",
      random_state = null,
    }: {
      copy?: boolean;
      whiten?: boolean;
      svd_solver?: string;
      tol?: number;
      iterated_power?: string;
      n_oversamples?: number;
      power_iteration_normalizer?: string;
      random_state?: any | null;
    } = {}
  ) {
    this.n_components = n_components;
    this.copy = copy;
    this.whiten = whiten;
    this.svd_solver = svd_solver;
    this.tol = tol;
    this.iterated_power = iterated_power;
    this.n_oversamples = n_oversamples;
    this.power_iteration_normalizer = power_iteration_normalizer;
    this.random_state = random_state;
  }
}

export default PCA;
