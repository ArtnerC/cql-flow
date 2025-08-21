window.BENCHMARK_DATA = {
  "lastUpdate": 1755751810176,
  "repoUrl": "https://github.com/ArtnerC/cql-flow",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T00:49:16-04:00",
          "tree_id": "b3d8883dc9fa5827702bf1b07cf7beb6b620f262",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1755751809860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25559.43932497904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684249435458306",
            "extra": "mean: 39.12448889372576 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3578.688356237685,
            "unit": "iter/sec",
            "range": "stddev: 0.00034060842953538404",
            "extra": "mean: 279.4319874925659 usec\nrounds: 3198"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2059.977439891395,
            "unit": "iter/sec",
            "range": "stddev: 0.00043521955140865337",
            "extra": "mean: 485.4422095286254 usec\nrounds: 1637"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8139.036447176905,
            "unit": "iter/sec",
            "range": "stddev: 0.000007145117047531252",
            "extra": "mean: 122.86466665803648 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6004.049628883171,
            "unit": "iter/sec",
            "range": "stddev: 0.000014324784649610589",
            "extra": "mean: 166.55425284784206 usec\nrounds: 3599"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30332.234918772872,
            "unit": "iter/sec",
            "range": "stddev: 0.000007852163805217288",
            "extra": "mean: 32.96822679495641 usec\nrounds: 14458"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13367.421059013071,
            "unit": "iter/sec",
            "range": "stddev: 0.000010676872485550811",
            "extra": "mean: 74.80874550037035 usec\nrounds: 8723"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3866.3162077550237,
            "unit": "iter/sec",
            "range": "stddev: 0.000019480731701563664",
            "extra": "mean: 258.6441321054415 usec\nrounds: 2498"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2036.8051673194286,
            "unit": "iter/sec",
            "range": "stddev: 0.000029835984276725288",
            "extra": "mean: 490.9649759559804 usec\nrounds: 1830"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1053.3380842974645,
            "unit": "iter/sec",
            "range": "stddev: 0.000026741564339105026",
            "extra": "mean: 949.3628065930617 usec\nrounds: 910"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32978.463964202696,
            "unit": "iter/sec",
            "range": "stddev: 0.000010283299467151196",
            "extra": "mean: 30.32281919150253 usec\nrounds: 15851"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24396.068182720395,
            "unit": "iter/sec",
            "range": "stddev: 0.000010218444692657317",
            "extra": "mean: 40.99021172224361 usec\nrounds: 13291"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18900.59092811173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001761122371412207",
            "extra": "mean: 52.90839867406755 usec\nrounds: 11616"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14742.3651016865,
            "unit": "iter/sec",
            "range": "stddev: 0.00001536190306010058",
            "extra": "mean: 67.8317212402779 usec\nrounds: 9962"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 643.6055857336025,
            "unit": "iter/sec",
            "range": "stddev: 0.00008032302485676215",
            "extra": "mean: 1.5537466146446937 msec\nrounds: 519"
          }
        ]
      }
    ]
  }
}